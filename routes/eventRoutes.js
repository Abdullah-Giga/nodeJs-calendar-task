const { Router } = require("express");
const eventController = require("../controllers/eventController");
const { requireAuth } = require("../middlewares/authMiddleware");

const router = Router();

router.get('/events', requireAuth, eventController.getCalendar);

router.get('/myEvents', requireAuth,eventController.getEvents);

router.get('/events/new', requireAuth, eventController.render_createNew);   

router.post('/events', requireAuth, eventController.createNew);

router.get('/events/edit/:id', requireAuth, eventController.render_edit);

router.put('/events/edit/:id', requireAuth, eventController.editEvent);

router.delete('/events/edit/:id', requireAuth, eventController.deleteEvent);    

module.exports = router;