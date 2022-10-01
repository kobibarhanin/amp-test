import { Partner as TPartner } from "../api/partner/Partner";

export const PARTNER_TITLE_FIELD = "id";

export const PartnerTitle = (record: TPartner): string => {
  return record.id || record.id;
};
