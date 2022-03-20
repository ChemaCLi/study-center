import * as uid from "uuid";
import { LocalPersistanceService } from "../local-persistance-service";

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.description
 * @param {string} params.coverUrl
 * @returns 
 */
export const create = ({
  title,
  description,
  coverUrl,
}) => {
  return LocalPersistanceService.saveData(
    "courses",
    { id: uid.v4(), title, description, coverUrl }
  )
}
