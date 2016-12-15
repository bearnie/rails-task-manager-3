class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :due_date
end
