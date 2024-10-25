import { TrashIcon } from "@/icons/TrashIcon";
import { VerticalDots } from "@/icons/VerticalDots";
import { Checkbox } from "@components/Checkbox";
import { Dropdown, DropdownOption } from "@components/Dropdown";
import { Select } from "@components/Select";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer as MuiTableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Stack,
  Chip,
  Box,
} from "@mui/material";
import { useState } from "react";

const dropdownOptions = [
  {
    id: 1,
    label: "Remove member",
    value: "Remove member",
    icon: <TrashIcon />,
    color: "error",
  },
];

export const TableLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isManageRowOpen, setIsManageRowOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHeader>
          <TableRow>
            <HeaderCell>
              <FlexTableCell>
                <Checkbox />
                Members
              </FlexTableCell>
            </HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell>Role</HeaderCell>
            <HeaderCell></HeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <BodyCell>
              <MemberDataWrapper>
                <TableAvatar>MA</TableAvatar>
                <Stack gap="2px">
                  <Typography variant="h6" color="grey.400">
                    Murat Alpay
                  </Typography>
                  <Typography variant="body2" color="grey.200">
                    muratalpaydesign@gmail.com
                  </Typography>
                </Stack>
              </MemberDataWrapper>
            </BodyCell>
            <BodyCell>
              <CustomBadge label="Disabled" />
            </BodyCell>
            <BodyCell>
              <SelectContainer>
                <Select
                  open={isOpen}
                  setIsOpen={() => {
                    setIsOpen(!isOpen);
                  }}
                  options={[
                    {
                      label: "Admin",
                      value: "Admin",
                    },
                    {
                      label: "User",
                      value: "User",
                    },
                  ]}
                />
              </SelectContainer>
            </BodyCell>
            <BodyCell align="right">
              <DotsWrapper onClick={() => setIsManageRowOpen(!isManageRowOpen)}>
                <VerticalDots />
              </DotsWrapper>
              <DropdownAnchor>
                <Dropdown
                  dropdownWidth={182}
                  options={dropdownOptions}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isOpen={isManageRowOpen}
                  setIsOpen={setIsManageRowOpen}
                />
              </DropdownAnchor>
            </BodyCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableContainer = styled(MuiTableContainer)`
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const TableHeader = styled(TableHead)``;

const TableAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  color: ${({ theme }) => theme.palette.grey[400]};
  ${({ theme }) => theme.typography.body1};
`;

const HeaderCell = styled(TableCell)`
  ${({ theme }) => theme.typography.label}
  background-color: ${({ theme }) => theme.palette.grey[500]};
  color: ${({ theme }) => theme.palette.grey[200]};
  padding: ${({ theme }) => theme.spacing(2, 3)};
  border: none;
`;

const FlexTableCell = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2.5)};
`;

const BodyCell = styled(TableCell)`
  padding: ${({ theme }) => theme.spacing(2, 3)};
  border: none;
`;

const MemberDataWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const CustomBadge = styled(Chip)`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  color: ${({ theme }) => theme.palette.grey[200]};
  ${({ theme }) => theme.typography.h6};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: 6px;
  height: 24px;

  .MuiChip-label {
    padding: ${({ theme }) => theme.spacing(0, 1.5)};
  }
`;

const SelectContainer = styled(Box)`
  width: 80px;
`;

const DropdownAnchor = styled("div")`
  position: absolute;
  /* top: 40px; */
  right: 210px;
`;

const DotsWrapper = styled(Box)`
  cursor: pointer;
`;
