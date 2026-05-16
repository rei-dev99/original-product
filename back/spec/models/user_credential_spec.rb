require 'rails_helper'

RSpec.describe UserCredential, type: :model do
  describe 'バリデーションチェック' do
    context 'バリデーション成功' do
      let(:user_credential) { build(:user_credential) }

      it '全てのユーザー登録情報が入っていること' do
        expect(user_credential).to be_valid
      end
    end

    context 'バリデーション失敗' do
      let(:user_credential) { build(:user_credential, email: nil) }

      it 'emailが空' do
        is_valid = user_credential.valid?
        expect(user_credential).to be_invalid
        expect(user_credential.errors[:email]).to include("can't be blank")
      end
    end

    context 'バリデーション失敗' do
      let(:user_credential) { build(:user_credential, email: nil) }

      it 'emailが空' do
        is_valid = user_credential.valid?
        expect(user_credential).to be_invalid
        expect(user_credential.errors[:email]).to include("can't be blank")
      end
    end
  end
end
