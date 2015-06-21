import Ember from 'ember';
 
export default Ember.Controller.extend({
 
    entryIndex : 1,
    login : function(usr, pwd)
    {
        var users =  this.store.find('user', {username: usr, password :pwd}).then(function(u){
            alert("Login!");
            return true;
        }).catch(function(){
            alert("Refuse!");
            return false;
        });
    },
 
    registrate : function (usr, pwd) {
        var users =  this.store.find('user', {username: usr}).then(function(u){
            alert("No Reg!");
            return false;
        }).catch(function(){
 
            alert("reg!");
            var newuser = this.store.createRecord('user', {
                username: usr,
                password: pwd
            });
 
            newuser.save();
            return true;
        });
 
    },
 
    saveTagebuchEintrag : function (date, title, content) {
        var index = this.get('entryIndex');
        index++;
        var entry = this.store.createRecord('entry', {
            id: index,
            date: date,
            title: title,
            url: "edit/"+index,
            description: content
        });
         
        entry.save();
        this.set('entryIndex', index);
    },
 
    editTagebuchEintrag : function (id, author, headline, content) {
 
        var entry = this.store.find('entry', id);
 
        entry.set('title',headline);
        entry.set('description',content);
 
        entry.save();
 
    },
 
    getTagebuchEintrag : function (id) {
        return this.store.find('entry', id);
 
    },
 
    getAllTagebuchEintraege : function () {
        return this.store.find('entry');
    }
 
});