(function (window) {
    window.opspark = window.opspark || {};
    var world = window.opspark.world = window.opspark.world || {};
    
    var physikz = window.opspark.racket.physikz;
    
    var _spring;
    
    world.makeRules = function(spring) {
        _spring = (spring ? spring : 0.009);
        
        var rules = {
            spring: _spring,
            handleCollision: handleCollision
        };
        
        return rules;
    }
    
    function handleCollision(distanceProperties, hitResult, impactProperties) {
        var bodyA, bodyB, distanceX, distanceY, distance, radiusCombined;
        
        bodyA = distanceProperties.bodyA;
        bodyB = distanceProperties.bodyB;
        distanceX = distanceProperties.distanceX;
        distanceY = distanceProperties.distanceY;
        distance = distanceProperties.distance;
        radiusCombined = hitResult.radiusCombined;
        
        var tx = bodyA.x + distanceX / distance * radiusCombined;
        var ty = bodyA.y + distanceY / distance * radiusCombined;
        var ax = (tx - bodyB.x) * _spring;
        var ay = (ty - bodyB.y) * _spring;
        bodyA.velocityX -= ax;
        bodyA.velocityY -= ay;
        bodyB.velocityX += ax;
        bodyB.velocityY += ay;
        
        bodyA.handleCollision(impactProperties.impact, bodyB);
        bodyB.handleCollision(impactProperties.impact, bodyA);
    }
    
    
})(window);