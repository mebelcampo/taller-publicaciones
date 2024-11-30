let express=require('express');
const publicacionesRoutes=require('./routes/publicacionesRoutes');
app = express();
const PORT = 2001;
app.use(express.json());

app.use('/api', publicacionesRoutes);

app.listen(PORT, () => {
    console.log('servidor corriendo',PORT);
});