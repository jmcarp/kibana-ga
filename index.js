export default function (kibana) {
  return new kibana.Plugin({
    id: 'ga',

    uiExports: {
      hacks: ['plugins/ga/hack'],
      injectDefaultVars(server) {
        let config = server.config();
        return {
          gaConfig: {
            name: config.get('ga.name'),
            tracker: config.get('ga.tracker'),
            fields: config.get('ga.fields'),
            set: config.get('ga.set')
          }
        };
      }
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        name: Joi.string(),
        tracker: Joi.string(),
        fields: Joi.object(),
        set: Joi.object()
      }).default();
    }
  });
}
