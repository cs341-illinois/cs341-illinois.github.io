### Good Example

The following is an example of a good citation

```c
/* 
@cite [AI-GEN]
@tool [Gemini 3 Flash]
@desc Asked to generate a standard C struct for a toaster and a 
function to print "Toasting..." with a random chance of burning.
*/
typedef struct {
    int darkness_level;
    bool has_sentience;
} Toaster;

void toast_bread(Toaster *t) {
    printf("Toasting at level %d...\n", t->darkness_level);
    if (rand() % 10 > 8) printf("Error: Bread is now charcoal.\n");
}

/* 
@cite [AI-PARTIAL]
@tool [Gemini 3 Flash]
@desc AI provided a basic switch statement for state management; 
I modified it to include the 'Existential Crisis' state.
*/
void handle_toaster_mood(Toaster *t) {
    switch(t->darkness_level) {
        case 11:
            printf("Toaster: 'I am become Heat, destroyer of sourdough.'\n");
            t->has_sentience = true;
            break;
        default:
            printf("Toaster: 'Just a quiet life of crumbs for me.'\n");
    }
}

/* 
@cite [AI-BRAINSTORM]
@tool [Gemini 3 Flash]
@desc Discussed how to handle memory allocation for a toaster's 
"memories." No code was copied, but the AI explained 
* why I should use malloc() for the 'Crumbs' array.
*/
void initialize_memories(Toaster *t) {
    // Logic implemented based on conceptual discussion
}
```

### Bad Example

The "Vague-Booker"

```c
/* 
@cite [AI-GEN]
@tool [AI]
@desc It wrote the code for me.
*/
void do_stuff() {
    // (This tells the grader nothing about what you actually prompted)
}
```

The "Wall of Text" (Overly Broad)

```c
/* 
@cite [AI-PARTIAL]
@tool [ChatGPT]
@desc I used the AI for the whole project. It helped with the 
loops, the logic, and the headers. I changed some things.
*/
// (Citations should be placed above the specific functions or blocks they refer to, 
// not as a single blanket statement at the top of a 500-line file.)
```

The "Minimalist"

```c
/* 
@cite [AI-GEN]
@tool [ChatGPT-4o]
@desc It helped.
*/
void complex_algorithm_i_did_not_write() { ... }
// (ERROR: "@desc" must explain the prompt or the specific task performed.)
```
