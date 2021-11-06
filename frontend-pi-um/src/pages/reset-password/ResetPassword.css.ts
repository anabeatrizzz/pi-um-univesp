import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 500,
    fontSize: 16
  }
})

const card: CSSProperties = {
  paddingRight: 5,
  paddingLeft: 5,
  width: 380,
  // paddingTop: 25,
  // paddingBottom: 25,
  height: 340
}

export default useStyles
export { card }