class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :due_date
  has_many :tasks
end
