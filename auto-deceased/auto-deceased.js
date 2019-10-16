// @author Reaver#4634

Hooks.on('preUpdateToken', tokenInfo => {
    if (!tokenInfo.scene.active) {
        return;
    }
    tokenHp = tokenInfo.actor.data.data.attributes.hp.value;
    if (tokenHp <= 0) {
        activeCombat = game.combats.entities.filter(combat => combat.data.active)[0];
        combatToken = activeCombat.data.combatants.filter(token => token.id == tokenInfo.data.id)[0];
        if (!combatToken.defeated) {
            index1 = game.combats.index(activeCombat.data._id);
            index2 = game.combats.entities[index1].data.combatants.findIndex(token => token.id == tokenInfo.data.id);
            game.combats.entities[index1].data.combatants[index2].defeated = true;
        }
    }
});