import { styled } from "@mui/material";
import { Input } from "@components/Input";
import { MagnifyingGlassIcon } from "@/icons/MagnifyingGlassIcon.tsx";

const SearchInput = () => {
  return (
    <Input
      slotProps={{
        input: {
          startAdornment: (
            <SearchIconWrapper>
              <MagnifyingGlassIcon />
            </SearchIconWrapper>
          ),
        },
      }}
      placeholder="Search"
      className="custom-search-input"
    />
  );
};

const SearchIconWrapper = styled("div")`
  min-width: 20px;
  height: 20px;
`;

export default SearchInput;
