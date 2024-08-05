import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);


   return (
     <Box m="20px">
       <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            It stands for frequently-asked questions, and it's a page on a website 
            that gives quick answers to customer questions.
            </Typography>
        </AccordionDetails>
       </Accordion>

       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Another Important question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            It stands for frequently-asked questions, and it's a page on a website 
            that gives quick answers to customer questions.
            </Typography>
        </AccordionDetails>
       </Accordion>

       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
               Your Favaroite question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            It stands for frequently-asked questions, and it's a page on a website 
            that gives quick answers to customer questions.
            </Typography>
        </AccordionDetails>
       </Accordion>


       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
               Some Random question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            It stands for frequently-asked questions, and it's a page on a website 
            that gives quick answers to customer questions.
            </Typography>
        </AccordionDetails>
       </Accordion>N

       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                The Final question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            It stands for frequently-asked questions, and it's a page on a website 
            that gives quick answers to customer questions.
            </Typography>
        </AccordionDetails>
       </Accordion>

      
   </Box>
   )
}

export default FAQ;