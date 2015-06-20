Diary.User =  DS.Model.extend({
    username: "",
    password: "",
    entries : DS.hasMany('Entry'),
    session : DS.belongsTo('userSession')
});

// TODO: Sessions
Diary.UserSession = DS.Model.extend({
    session : DS.belongsTo('user')
});