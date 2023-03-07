const deepMerge = (obj1, obj2) => {
   
    // Create a new object that combines the properties of both input objects
    const merged = {
        ...obj1,
        ...obj2
    };
    
    if(Object.keys(obj2).length) {
        
        // Loop through the properties of the merged object
        for (const key of Object.keys(merged)) {
            // Check if the property is an object
            if (typeof merged[key] === 'object' && !(merged[key] instanceof Array) && merged[key] !== null) {
                // If the property is an object, recursively merge the objects
                if(obj2[key]) {
                    merged[key] = deepMerge(obj1[key], obj2[key]);
                }
                
            }
        }
        
    }
    
    return merged;
}

export { deepMerge };

const addEvents = (elem, events=[], listener=()=>{}) => {
    
    events = typeof events == 'string' ? [events] : events; 
    
    events.forEach(eventType => {
        elem.addEventListener(eventType, listener);
    })
        
}

export { addEvents };

const addElemClasses = (elements=[], classes=[]) => {
    
    if(elements) {
        
        if(elements instanceof NodeList) {
            
            elements.forEach(elem => {
                classes.forEach(c => {
                    elem.classList.add(c);
                })
            
            })
            
        }
        else if(elements instanceof HTMLElement) {
            classes.forEach(c => {
                elements.classList.add(c);
            })
        }
        
    }
    
    return elements;
    
}

export { addElemClasses };

const removeElemClasses = (elements=[], classes=[]) => {
    
    if(elements) {
        
        if(elements instanceof NodeList) {
            
            elements.forEach(elem => {
                classes.forEach(c => {
                    elem.classList.remove(c);
                })
            
            })
            
        }
        else if(elements instanceof HTMLElement) {
            classes.forEach(c => {
                elements.classList.remove(c);
            })
        }
         
    }
    
    return elements;
    
}

export { removeElemClasses };

const toggleElemClasses = (elements=[], classes=[], toggle=true) => {
    
    if(elements) {
        
        if(elements instanceof NodeList) {
            
            elements.forEach(elem => {
                classes.forEach(c => {
                    elem.classList.toggle(c, toggle);
                })
            
            })
            
        }
        else if(elements instanceof HTMLElement) {
            classes.forEach(c => {
                elements.classList.toggle(c, toggle);
            })
        }
        
    }
    
    return elements;
    
}

export { toggleElemClasses };