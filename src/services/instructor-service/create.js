import * as uid from "uuid";
import { ROLES } from "../../permissions";
import { LocalPersistanceService } from "../local-persistance-service";

export const create = ({
  name,
  email
}) => {
  return LocalPersistanceService.saveData(
    "users",
    { name, email, id: uid.v4(), role: ROLES.INSTRUCTOR }
  )
}
