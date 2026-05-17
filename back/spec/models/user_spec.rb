require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    describe 'status validation' do
      context 'when attributes are valid' do
        let(:user) { build(:user) }

        it 'is valid' do
          expect(user).to be_valid
        end
      end

      context 'when status is deleted' do
        let(:user) { build(:user, status: "deleted") }

        it 'is valid' do
          expect(user).to be_valid
        end
      end

      context 'when status is unknown' do
        let(:user) { build(:user, status: "unknown") }

        it 'is invalid' do
          expect(user).to be_invalid
        end
      end

      context 'when status is blank' do
        let(:user) { build(:user, status: nil) }

        it 'is invalid' do
          expect(user).to be_invalid
        end
      end
    end
  end
end
