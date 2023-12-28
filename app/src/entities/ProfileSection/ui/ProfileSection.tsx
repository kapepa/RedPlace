import classNames from "classnames";
import { FC } from "react";
import styles from "./ProfileSection.module.scss";

interface ProfileSectionProps {
  className?: string,
}

const ProfileSection: FC<ProfileSectionProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.profile_section, className)}>
      ProfileSection
    </div>
  )
}

export { ProfileSection }