class Room < ApplicationRecord
  has_many :messages, -> { order(created_at: :desc) }
end
