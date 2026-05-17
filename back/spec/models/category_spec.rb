require 'rails_helper'

RSpec.describe Category, type: :model do
  describe 'validations' do
    describe 'presence validation' do
      context 'when attributes are valid' do
        let(:category) { build(:category) }

        it 'is valid' do
          expect(category).to be_valid
        end
      end

      context 'when name is blank' do
        let(:category) { build(:category, name: nil) }

        it 'is invalid' do
          expect(category).to be_invalid
        end
      end
    end

    describe 'uniqueness validation' do
      context 'when name already exists' do
        let!(:category_before) { create(:category, name: "AI活用習慣") }
        let(:category) { build(:category, name: "AI活用習慣") }

        it 'is invalid' do
          expect(category).to be_invalid
        end
      end
    end
  end
end
