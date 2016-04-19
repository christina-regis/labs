json.array!(@characters) do |character|
  json.extract! character, :id, :name, :age, :description, :active
  json.url character_url(character, format: :json)
end
