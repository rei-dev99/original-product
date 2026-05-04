"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Category } from "@/types/category";
import submitAnswers from "../lib/answers";
import fetchCategories from "../lib/categories";
import { requireAuth } from "../lib/requireAuth";

export default function Question() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [answers, setAnswers] = useState<{ [key: number]: number }>({});

	const [currentCategoryIndex, setcurrentCategoryIndex] = useState<number>(0);

	function nextCategory() {
		setcurrentCategoryIndex((index) => index + 1);
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchCategories();
			setCategories(data);
		};

		fetchData();
	}, []);

	useEffect(() => {
		const session = async () => await requireAuth();
		session();
	}, []);

	const handleChange = (questionId: number, choiceId: number) => {
		setAnswers({
			...answers,
			[questionId]: choiceId,
		});
	};

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const result = await submitAnswers(answers);
			router.push(`/results/${result.id}`);
		} catch (error) {
			console.error(error);
		}
	};

	const currentCategory = categories[currentCategoryIndex];

	const questionIds = currentCategory?.questions.map((question) => {
		return question.id;
	});

	const answeredIds = Object.keys(answers).map(Number);

	const disable = questionIds?.every((id) => {
		return answeredIds.includes(id);
	});

	return (
		<form
			onSubmit={handleSubmit}
			className="text-center flex flex-col gap-6 py-15"
		>
			{currentCategory ? (
				<div className="flex flex-col gap-2" key={currentCategory.id}>
					<h2 className="text-3xl font-bold mb-4">{currentCategory.name}</h2>
					{currentCategory.questions.map((question) => (
						<div>
							<h3 className="text-2xl font-bold mb-2">{question.content}</h3>
							{question.choices.map((choice) => (
								<div className="flex flex-col gap-2">
									<input
										id={`choice-${choice.id}`}
										type="radio"
										className="hidden peer"
										name={`question-${question.id}`}
										value={choice.id}
										onChange={() => handleChange(question.id, choice.id)}
									/>
									<label
										htmlFor={`choice-${choice.id}`}
										key={choice.id}
										className="flex flex-col w-full max-w-lg mx-auto text-center border-2 rounded-2xl border-gray-900 p-2 my-4 text-3xl peer-checked:bg-green-200"
									>
										{choice.content}
									</label>
								</div>
							))}
						</div>
					))}
				</div>
			) : (
				"読み込み中"
			)}
			<div>
				{currentCategoryIndex === categories.length - 1 ? (
					<button
						className="px-6 py-2 bg-sky-500 hover:bg-sky-700 rounded-2xl text-white"
						type="submit"
						disabled={!disable}
					>
						送信
					</button>
				) : (
					<button
						className="px-6 py-2 bg-sky-500 hover:bg-sky-700 rounded-2xl text-white"
						type="button"
						onClick={nextCategory}
						disabled={!disable}
					>
						次へ
					</button>
				)}
			</div>
		</form>
	);
}
