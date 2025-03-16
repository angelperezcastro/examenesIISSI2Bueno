import { RestaurantCategory } from '../models/models.js'
const index = async function (req, res) {
  try {
    const restaurantCategories = await RestaurantCategory.findAll()
    res.json(restaurantCategories)
  } catch (err) {
    res.status(500).send(err)
  }
}
const create = async (value, { req, res }) => {
  let newRestaurantCategory = RestaurantCategory.build(req.body)
  try {
    newRestaurantCategory = await newRestaurantCategory.save()
    res.json(newRestaurantCategory)
  } catch (err) {
    res.status(500).send(err)
  }
}
const RestaurantCategoryController = {
  index,
  create
}
export default RestaurantCategoryController
