import { SettingsIcon } from "@/icons/SettingsIcon";
import { TrashIcon } from "@/icons/TrashIcon";
import { Dropdown, DropdownOption } from "@components/Dropdown";
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
import { useSearchParams } from "react-router-dom";

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
  const [isManageRowOpen, setIsManageRowOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [_, setSearchParams] = useSearchParams();

  const handleManageClick = () => {
    setIsManageRowOpen(!isManageRowOpen);
    setSearchParams({ user: "Murat Alpay" });
  };

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHeader>
          <TableRow>
            <HeaderCell>Members</HeaderCell>
            <HeaderCell>Role</HeaderCell>
            <HeaderCell>Location</HeaderCell>
            <HeaderCell>Permissions</HeaderCell>
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
              <CustomBadge label="Senior UX/UI Designer" />
            </BodyCell>
            <BodyCell>
              <CustomBadge label="Senior UX/UI Designer" />
            </BodyCell>
            <BodyCell>
              <CustomBadge label="9 permissions" />
            </BodyCell>
            <BodyCell align="right">
              <ManageWrapper onClick={handleManageClick}>
                <SettingsIcon />
              </ManageWrapper>
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
  background-color: transparent;
  color: ${({ theme }) => theme.palette.grey[200]};
  ${({ theme }) => theme.typography.h6};
  border: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  border-radius: 6px;
  height: 24px;

  .MuiChip-label {
    padding: ${({ theme }) => theme.spacing(0, 1.5)};
  }
`;

const DropdownAnchor = styled("div")`
  position: absolute;
  /* top: 40px; */
  right: 210px;
`;

const ManageWrapper = styled(Box)`
  cursor: pointer;
`;
