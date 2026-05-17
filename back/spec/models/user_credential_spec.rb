require 'rails_helper'

RSpec.describe UserCredential, type: :model do
  describe 'validations' do
    describe 'provider別認証' do
      context 'when provider is email' do
        let(:user_credential) { build(:user_credential) }

        it 'is valid' do
          expect(user_credential).to be_valid
        end
      end

      context 'when provider is guest' do
        let(:user_credential) { build(:user_credential, :guest) }

        it 'is valid' do
          expect(user_credential).to be_valid
        end
      end

      context 'when provider is google' do
        let(:user_credential) { build(:user_credential, :google) }

        it 'is valid' do
          expect(user_credential).to be_valid
        end
      end
    end

    describe 'presence validation' do
      context 'when provider is blank' do
        let(:user_credential) { build(:user_credential, provider: nil) }

        it 'is invalid' do
          expect(user_credential).to be_invalid
        end
      end

      context 'when uid is blank' do
        let(:user_credential) { build(:user_credential, uid: nil) }

        it 'is invalid' do
          expect(user_credential).to be_invalid
        end
      end

      context 'when email is blank' do
        let(:user_credential) { build(:user_credential, email: nil) }

        it 'is invalid' do
          expect(user_credential).to be_invalid
        end
      end

      context 'when password is blank' do
        let(:user_credential) { build(:user_credential, password: nil) }

        it 'is invalid' do
          expect(user_credential).to be_invalid
        end
      end
    end

    describe 'uniqueness validation' do
      context 'when email already exists' do
        let!(:user_credential_before) { create(:user_credential, email: "hogehoge@hoge.com") }
        let(:user_credential) { build(:user_credential, email: "hogehoge@hoge.com") }

        it 'is invalid' do
          expect(user_credential).to be_invalid
        end
      end
    end

    describe 'length validation' do
      context 'when password is shorter than 8 chars' do
        let(:user_credential) { build(:user_credential, password: "passwor") }

        it 'is invalid' do
          expect(user_credential).to be_invalid
        end
      end
    end

    describe 'association validation' do
      context 'when user is missing' do
        let(:user_credential) { build(:user_credential, user: nil) }

        it 'is invalid' do
          expect(user_credential).to be_invalid
        end
      end
    end
  end
end
