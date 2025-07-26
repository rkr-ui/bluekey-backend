import assetRoutes from './asset';
import bookingRoutes from './booking';
import paymentRoutes from './payment';

export const setRoutes = (app) => {
  app.use('/api/assets', assetRoutes);
  app.use('/api/bookings', bookingRoutes);
  app.use('/api/payments', paymentRoutes);
  // ...other routes
};