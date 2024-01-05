// import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Cards({title, description,thumbnail,id,price,stock,rating,brand,discountPercentage}) {
  const navigate = useNavigate();

  return (
    <div>
    <Card sx={{ maxWidth: 280 }}>
    <CardMedia
      sx={{ height: 120 }}
      image={thumbnail}
    />
    <CardContent>
      <Typography gutterBottom variant="h7" component="div" align='left'>
        Rs {price}
      </Typography>
      
<Typography gutterBottom variant="h7" component="div">
{brand}
</Typography>
      <Typography gutterBottom variant="h7" component="div">
       {title}
    </Typography>
  
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
  
    </CardContent>
    
  </Card>

    </div>
  );
}

export default Cards;