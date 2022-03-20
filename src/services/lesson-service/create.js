import * as uid from "uuid";
import { LocalPersistanceService } from "../local-persistance-service";

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.description
 * @param {string} params.markdownDescription
 * @param {string} params.coverUrl
 * @param {number} params.minutes
 * @param {string} params.moduleId
 */
export const create = ({ ...newLessonData }) => {
  return LocalPersistanceService.saveData(
    "lessons",
    { id: uid.v4(), ...newLessonData }
  )
}
