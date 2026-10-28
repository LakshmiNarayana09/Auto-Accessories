import ProfileForm from "./ProfileForm";
import PageHeading from "../common/PageHeading";
import { MOCK_PROFILE } from "../../data/account/accountData";
import type { ProfileInfo } from "../../types/account";

interface ProfileSettingsProps {
  profile?: ProfileInfo;
  onSave?: (values: ProfileInfo) => void | Promise<void>;
}

export default function ProfileSettings({
  profile = MOCK_PROFILE,
  onSave = (values) => console.log("Profile saved:", values),
}: ProfileSettingsProps) {
  return (
    <>
      <PageHeading title="Personal information" />
      <ProfileForm initialValues={profile} onSave={onSave} />
    </>
  );
}