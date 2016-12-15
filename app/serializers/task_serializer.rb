class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :complete
  belongs_to :list
end
