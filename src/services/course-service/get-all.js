import { LocalPersistanceService } from "../local-persistance-service";

/**
 * @returns {Promise<Course[]>}
 */
export const getAll = () => {
  return LocalPersistanceService.getData("courses")
}

/**
 * @typedef {object} Course
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} coverUrl
 */
