import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormGroup, Grid2 as Grid } from "@mui/material";
import { Switch } from "@components/Switch";
import HeadingBlock from "@components/HeadingBlock ";

interface IDefaultValuesForm {
  [key: string]: boolean;
}

interface ICheckBoxForm {
  defaultFormValues: IDefaultValuesForm;
  fields: {
    id: string;
    title: string;
    subtitle: string;
  }[];
}

const CheckBoxForm = ({ defaultFormValues, fields }: ICheckBoxForm) => {
  const { control, watch } = useForm<IDefaultValuesForm>({
    defaultValues: defaultFormValues,
  });

  const watchAllFields = watch();

  useEffect(() => {
    console.log("Current switch states:", watchAllFields);
  }, [watchAllFields]);

  const renderSwitch = (name: string, title: string, subtitle: string) => (
    <Grid container spacing={2} alignItems="flex-start">
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Switch {...field} />}
      />
      <HeadingBlock variant="medium" title={title} subtitle={subtitle} />
    </Grid>
  );

  return (
    <FormGroup
      style={{
        paddingTop: "1px",
        gap: "12px",
      }}
    >
      {fields.map(({ id, title, subtitle }) =>
        renderSwitch(id, title, subtitle),
      )}
    </FormGroup>
  );
};

export default CheckBoxForm;
