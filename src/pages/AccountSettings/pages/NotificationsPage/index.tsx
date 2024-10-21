import { Grid2 } from "@mui/material";
import { Divider } from "@components/Divider";

import HeadingBlock from "@components/HeadingBlock ";
import CheckBoxForm from "./modules/CheckboxForm";
import {
  defaultNotificationsSwitchData,
  defaultPushSwitchData,
  emailNotificationsData,
  pushNotificationsData,
} from "./static";

export const NotificationsPage = () => {
  return (
    <>
      <Grid2 container direction="column" spacing={4}>
        <HeadingBlock
          title="Email notifications"
          subtitle="Got emails to find out what's going on when you're not online"
        />
        <CheckBoxForm
          defaultFormValues={defaultNotificationsSwitchData}
          fields={emailNotificationsData}
        />
        <Divider />
        <HeadingBlock
          title="Push notifications"
          subtitle="Got emails to find out what's going on when you're not online"
        />
        <CheckBoxForm
          defaultFormValues={defaultPushSwitchData}
          fields={pushNotificationsData}
        />
      </Grid2>
    </>
  );
};
