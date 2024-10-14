import { Grid2 } from "@mui/material";
import AccountSidebarLayout from "@/layouts/AccountSidebarLayout";
import { Divider } from "@components/Divider";
import CheckBoxForm from "@modules/settings/notifications/CheckBoxForm.tsx";
import {
  defaultNotificationsSwitchData,
  defaultPushSwitchData,
  emailNotificationsData,
  pushNotificationsData,
} from "@modules/settings/notifications/settings.ts";
import HeadingBlock from "../../components/HeadingBlock";

const Notifications = () => {
  return (
    <AccountSidebarLayout
      headerProps={{
        title: "Notifications",
        description: "Customize the look and feel of your account",
      }}
    >
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
    </AccountSidebarLayout>
  );
};

export default Notifications;
