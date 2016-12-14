class List < ActiveRecord::Base
  has_many :tasks, dependent: :destroy
  belongs_to :user

  validates :name, presence: true
  validates :due_date, presence: true
end
