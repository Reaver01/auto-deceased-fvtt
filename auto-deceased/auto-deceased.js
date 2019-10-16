// @author Reaver#4634

Hooks.on('updateToken', tokenInfo => {
    if (!tokenInfo.scene.active) {
        return;
    }
    tokenHp = tokenInfo.actor.data.data.attributes.hp.value;
    if (tokenHp <= 0) {
        activeCombat = game.combats.entities.filter(combat => combat.data.active)[0];
        combatToken = activeCombat.data.combatants.filter(token => token.tokenId == tokenInfo.data.id)[0];
        if (!combatToken.defeated) {
            game.combat.updateCombatant({id: combatToken.id, defeated: true});
        }
    }
});