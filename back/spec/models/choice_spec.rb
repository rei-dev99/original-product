require 'rails_helper'

RSpec.describe Choice, type: :model do
  describe 'validations' do
    describe 'presence validation' do
      context 'when attributes are valid' do
        let(:choice) { build(:choice) }

        it 'is valid' do
          expect(choice).to be_valid
        end
      end

      context 'when content is blank' do
        let(:choice) { build(:choice, content: nil) }

        it 'is invalid' do
          expect(choice).to be_invalid
        end
      end

      context 'when score is blank' do
        let(:choice) { build(:choice, score: nil) }

        it 'is invalid' do
          expect(choice).to be_invalid
        end
      end
    end

    describe 'range validation' do
      context 'when score is 0' do
        let(:choice) { build(:choice, score: 0) }

        it 'is invalid' do
          expect(choice).to be_invalid
        end
      end

      context 'when score is 1' do
        let(:choice) { build(:choice, score: 1) }

        it 'is valid' do
          expect(choice).to be_valid
        end
      end

      context 'when score is 2' do
        let(:choice) { build(:choice, score: 2) }

        it 'is valid' do
          expect(choice).to be_valid
        end
      end

      context 'when score is 3' do
        let(:choice) { build(:choice, score: 3) }

        it 'is valid' do
          expect(choice).to be_valid
        end
      end

      context 'when score is 4' do
        let(:choice) { build(:choice, score: 4) }

        it 'is invalid' do
          expect(choice).to be_invalid
        end
      end
    end
  end

  describe 'association validation' do
    context 'when question is missing' do
      let(:choice) { build(:choice, question: nil) }

      it 'is invalid' do
        expect(choice).to be_invalid
      end
    end
  end
end
