const { Note } = require('../models/Note');

module.exports = {
  getNotes: async (req, res) => {
    try {
      const notes = await Note.findAll();
      res.json(notes);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get notes' });
    }
  },

  createNote: async (req, res) => {
    const { title, text } = req.body;

    const useragent = require('useragent');
    let agent = useragent.parse(req.headers['user-agent']);

    try {
      const newNote = await Note.create({
        id: uuid.v4(),
        title: title,
        text: text,
        date: new Date().toISOString(),
        ip: req.ip,
        browser: agent.toAgent(),
        os: agent.os.toString()
      });

      res.status(200).json(newNote);
    } catch (err) {
      res.status(500).json({ error: 'Failed to save new note' });
    }
  },

  deleteNote: async (req, res) => {
    try {
      const note = await Note.findOne({ where: { id: req.params.id } });

      if (!note) {
        return res.status(404).json({ error: 'No note found with this id' });
      }

      await Note.destroy({ where: { id: req.params.id } });

      res.status(200).json({ success: 'Note deleted!' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete note' });
    }
  },
};
