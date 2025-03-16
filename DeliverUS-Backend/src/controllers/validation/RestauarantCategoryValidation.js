import { RestaurantCategory } from '#root/src/models/models.js'
import { check } from 'express-validator'

const checkCategorytExists = async (value, { req }) => {
  try {
    const restaurantCategory = RestaurantCategory.findOne({
      where: { name: value }
    })
    if (restaurantCategory === null) {
      return Promise.resolve()
    } else { return Promise.reject(new Error('The Restaurant Category already exists.')) }
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}

const create = [
  check('name').exists().isString().isLength({ min: 1, max: 50 }).trim(),
  check('name').custom(checkCategorytExists)

]

export { create }
