class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :video_id
end
