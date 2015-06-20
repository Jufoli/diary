import Ember from 'ember';

export default Ember.Controller.extend({

    entryIndex : 3,
    login : function(username, passwort)
    {
        /*var users = this.store.find('user');

         var j = 0;

         for(var i = 0;i < users.length; i++){

         if(users[i].username == username){

         if(users[i].password == passwort){

         // username und zugehöriges Passwort passen! return true
         return true;
         }else{
         // Passwort falsch, return false
         return false;
         }
         }else{
         j++;
         }
         }

         // Keinen passenden User gefunden, return false
         if(j == users.length){
         return false;
         }*/
        return true;
    },

    logout : function() {
        // destroy session
        return true;
    },

    registrate : function () {
        //TODO existiert User?
        this.store.push('user', {
            username: "",
            password: ""
        });
    },

    saveTagebuchEintrag : function (date, title, content) {
        var index = this.get('entryIndex');
        index++;
        var entry = this.store.createRecord('entry', {
            id: index,
            date: date,
            title: title,
            url: "entries/"+index,
            description: content
        });
        
        entry.save();
        this.set('entryIndex', index);
    },

    editTagebuchEintrag : function (id, author, headline, content) {

        var entry = this.store.find('entry', id);

    },

    getTagebuchEintrag : function (id) {

        return this.store.find('entry', id);

    },

    getAllTagebuchEintraege : function () {
        return this.store.find('entry');
    }

});