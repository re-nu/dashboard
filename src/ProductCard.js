import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
<<<<<<< HEAD
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function ProductCard({ name, image, id }) {

  const history=useHistory();
    //console.log(id,name,image);
=======

export function ProductCard({ name, image, id }) {
    console.log(id);
>>>>>>> 95445314c2a6a22a4b4678de1f012252d948d312
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
<<<<<<< HEAD
      height="160"
=======
      height="140"
>>>>>>> 95445314c2a6a22a4b4678de1f012252d948d312
      image={image}
      alt={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name} 
      </Typography>
      
    </CardContent>
    <CardActions>
<<<<<<< HEAD
      <IconButton
           onClick={()=>history.push("/desserts/"+id)}
           edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <InfoIcon />
          </IconButton>
          <IconButton
           onClick={()=>history.push("/delete/"+id)}
           edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <DeleteIcon />
          </IconButton>
          <IconButton
           onClick={()=>history.push("/edit/"+id)}
           edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <EditIcon />
          </IconButton>
=======
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
>>>>>>> 95445314c2a6a22a4b4678de1f012252d948d312
    </CardActions>
  </Card>
  );
}
