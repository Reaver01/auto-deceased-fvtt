// @author Reaver#4634

Hooks.on('updateToken', tokenInfo => {
    if (!tokenInfo.scene.active) {
        return;
    }
    tokenHp = tokenInfo.actor.data.data.attributes.hp.value;
    activeCombat = game.combats.entities.filter(combat => combat.data.active)[0];
    combatToken = activeCombat.data.combatants.filter(token => token.tokenId == tokenInfo.data.id)[0];
    game.combat.updateCombatant({
        id: combatToken.id,
        defeated: (tokenHp == 0)
    });
});