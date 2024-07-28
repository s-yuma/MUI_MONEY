"use client";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Box,
  Button,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaidIcon from "@mui/icons-material/Paid";
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from "@mui/x-date-pickers/models";
import { Dayjs } from "dayjs";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { UseDateFieldProps } from "@mui/x-date-pickers/DateField";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddIcon from "@mui/icons-material/Add";
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs, false>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      false,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonField(props: ButtonFieldProps) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { "aria-label": ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
      sx={{ border: "2px solid gray", borderRadius: " 10px" }}
    >
      {label ? ` ${label}` : <CalendarMonthOutlinedIcon />}
    </Button>
  );
}

function ButtonDatePicker(
  props: Omit<DatePickerProps<Dayjs>, "open" | "onOpen" | "onClose">
) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ ...props.slots, field: ButtonField }}
      slotProps={{ ...props.slotProps, field: { setOpen } as any }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}
const AddPaid = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", alignItems: "center", width: "60vw" }}
    >
      <Box sx={{ display: "flex" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton type="button">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />

      </Box>
      <FormControl fullWidth>
        <Box sx={{ display: "flex", alignItems: "center", ml: 1, gap: "40px" }}>
          <Stack direction="row" alignItems="center" gap={1}>
            <PersonAddIcon />
            <InputLabel id="demo-simple-select-label"></InputLabel>

            <Select
              labelId="demo-simple-select-label"
              //   value={age}
              sx={{
                minWidth: 120,
                height: "30px",
                border: "2px solid gray",
                borderRadius: " 10px",
              }}
            >
              <MenuItem value={10}>息子</MenuItem>
              <MenuItem value={20}>娘</MenuItem>
              <MenuItem value={30}>孫</MenuItem>
            </Select>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <CategoryRoundedIcon />
            <InputLabel id="demo-simple-select-label"></InputLabel>

            <Select
              labelId="demo-simple-select-label"
              //   value={age}
              sx={{
                minWidth: 120,
                height: "30px",
                border: "2px solid gray",
                borderRadius: " 10px",
              }}
            >
              <MenuItem value={10}>ペット</MenuItem>
              <MenuItem value={20}>医療</MenuItem>
              <MenuItem value={30}>お菓子</MenuItem>
            </Select>
          </Stack>
          <Stack direction="row" alignItems="center">
            <PaidIcon />
            <InputBase
              sx={{
                ml: 1,
                width: "120px",
                border: "2px solid gray",
                borderRadius: " 10px",
                pl:"10px"
              }}
              endAdornment={<InputAdornment position="end" sx={{pr:"4px"}}>円</InputAdornment>}
            />
          </Stack>
          <ButtonDatePicker
            label={value == null ? null : value.format("YYYY/MM/DD")}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </Box>
      </FormControl>
    </Paper>
  );
};

export default AddPaid;
