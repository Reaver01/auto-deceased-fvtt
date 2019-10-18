// @author Reaver#4634

Hooks.on('updateToken', (entity, sceneId, update) => {
    if (hasProperty(update, "actorData.data.attributes.hp.value")) {
        SyncTokenStatus(entity);
    }
});

// Syncs Token HP and deceased status in the combat tracker. Goes well with Combat Utility Belt marking
// Bloodied and dead: https://raw.githubusercontent.com/death-save/combat-utility-belt/beta/module.json
function SyncTokenStatus(entity) {
    if (!entity.scene.active) {
        return;
    }
    const combat = game.combat;
    if (combat) {
        combatant = combat.data.combatants.find(token => token.tokenId == entity.data.id);
        tokenHp = entity.actor.data.data.attributes.hp.value;
        if (combatant) {
            combat.updateCombatant({
                id: combatant.id,
                defeated: (tokenHp == 0)
            });
        }
    }
}