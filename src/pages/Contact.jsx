import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CellTower, Mail, SupportAgent } from "@mui/icons-material";

const Contact = () => {
  const Paper = () => {};
  return (
    <div>
      <Layout>
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4"> Contact My Resturant</Typography>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            doloremque odio sunt maiores sit porro officiis, aliquid delectus
            dignissimos ut libero et voluptatibus quos, pariatur beatae nostrum
            placeat qui a aperiam minima quisquam in ducimus. Quos neque ad
            accusamus cupiditate. Beatae asperiores quos laborum dolore
            excepturi totam sed perspiciatis fugit numquam, esse repellat
          </p>
        </Box>
        <Box sx={{m: 3,
        width: "600px",
        ml: 10,
        "@media (max-width:600px":{
          width: "300px"
        }}}>
          <TableContainer>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black", color:'white'}} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>                
                  <TableRow>
                    <TableCell>
                      <SupportAgent sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                      (tollfree)
                    </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Mail sx={{ color: "skyblue", pt: 1 }} />
                        help@jkindustrys.com
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <CellTower sx={{ color: "green", pt: 1 }} />
                        8220942384
                      </TableCell>
                    </TableRow>
                  
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </div>
  );
};

export default Contact;
