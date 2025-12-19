# Superpowers Plugin - Skills Not Found Fix

## Problem
When using `use_skill tool with skill_name: "superpowers:brainstorming"`, OpenCode couldn't find the skills in `~/.config/opencode/superpowers/skills/`.

## Root Cause
The plugin had two path issues:
1. **Import path**: Pointing to wrong skills-core.js location
2. **Skills directory**: Pointing to wrong skills folder

## Fix Applied
Updated `~/.config/opencode/plugin/superpowers.js`:

### 1. Fixed Import Path (Line 13)
```javascript
// BEFORE:
import * as skillsCore from '../../lib/skills-core.js';

// AFTER:
import * as skillsCore from '../superpowers/lib/skills-core.js';
```

### 2. Fixed Skills Directory (Line 21)
```javascript
// BEFORE:
const superpowersSkillsDir = path.resolve(__dirname, '../../skills');

// AFTER:
const superpowersSkillsDir = path.resolve(__dirname, '../superpowers/skills');
```

## Testing
The fix has been verified:
- ✅ Plugin loads successfully
- ✅ Skills directory path: `C:\Users\faiz\.config\opencode\superpowers\skills`
- ✅ Found 14 skills including 'brainstorming'
- ✅ OpenCode sessions work correctly

## Available Skills
Now you can use these superpowers skills:
- `superpowers:brainstorming`
- `superpowers:systematic-debugging`
- `superpowers:test-driven-development`
- `superpowers:subagent-driven-development`
- And 10 more...

## Usage Examples
```bash
# List all available skills
use find_skills tool

# Load brainstorming skill
use use_skill tool with skill_name: "superpowers:brainstorming"

# Load debugging skill
use use_skill tool with skill_name: "superpowers:systematic-debugging"
```

## Updated Files
- `~/.config/opencode/plugin/superpowers.js` - Fixed plugin
- `~/.config/opencode/superpowers/update-plugin.sh` - Updated auto-fix script
- `~/.config/opencode/superpowers/update-plugin.bat` - Updated Windows script

## Next Steps
The plugin should now work correctly. Try:
1. `use find_skills tool` - to see all available skills
2. `use use_skill tool with skill_name: "superpowers:brainstorming"` - to test a skill