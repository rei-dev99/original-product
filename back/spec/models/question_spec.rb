require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'validations' do
    context 'when all attributes are valid' do
      let(:question) { build(:question) }

      it 'is valid' do
        expect(question).to be_valid
      end
    end

    describe 'presence validation' do
      context 'when content is blank' do
        let(:question) { build(:question, content: nil) }

        it 'is invalid' do
          expect(question).to be_invalid
        end
      end
    end

    describe 'uniqueness validation' do
      context 'when content already exists' do
        let!(:question_before) { create(:question, content: "エラーが出た時、まず何をしますか？") }
        let(:question) { build(:question, content: "エラーが出た時、まず何をしますか？") }

        it 'is invalid' do
          expect(question).to be_invalid
        end
      end
    end

    describe 'association validation' do
      context 'when category is missing' do
        let(:question) { build(:question, category: nil) }

        it 'is invalid' do
          expect(question).to be_invalid
        end
      end
    end
  end
end
