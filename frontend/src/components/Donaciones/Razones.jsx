import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  
  <MuiAccordion disableGutters elevation={0} square {...props} className="mt-5"/>
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container">
        <h4 className="text-left mt-5"><strong>Ayudanos a ayudarlos</strong></h4>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            
          <Typography><strong>¿Por qué deberías donar?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-left mt-3">
            Nuestra fundación se dedica al rescate de perros y gatos en condición de calle. 
            Buscamos proteger la vida de perros y gatos en estado de maltrato y abandono. <br/> <br/>Los animales que llegan a la fundación 
            reciben atención veterinaria completa, incluyendo vacunación, esterilización, desparacitación y cualquier tratamiento necesario 
            para garantizar su bienestar hasta que logremos encontrarles un hogar que los cuide de por vida.<br/><br/>Con tus donaciones
            haces posible que el sueño de ayudar a los animalitos sea una realidad. 
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><strong>¿Qué tipos de donaciones puedes hacer?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-left mt-3">
            <ul>
                <li>Donación de Dinero</li><br/>
                <li>Alimento para perros y gatos</li><br/>
                <li>Arena para gatos y bolsas biodegradables para perros</li><br/>
                <li>Pago de tratamientos veterinarios y medicamentos</li><br/>
                <li>Juguetes y accesorios para perros y gatos</li><br/>
                <li>Implementos de aseo</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><strong>¿Cuál es el destino de las donaciones?'</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-left mt-3">
            Tus donaciones hacen posible pagar diferentes gastos y obligaciones que tiene la fundación. El 50% de las donaciones permiten
            pagar el predio en dónde esta ubicada la fundación. El 20% para compra de concentrado para las mascotas. El 20% para el pago a nuestros
            colaboradores y el 10% restante para el mantenimiento de las instalaciones y otros gstos. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}