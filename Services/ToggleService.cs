﻿using Advanced.Blazor;

namespace Advanced.Services;

public class ToggleService
{
    private List<MultiNavLink> components = new List<MultiNavLink>();
    
    private bool enabled = true;

    public void EnrolComponents(IEnumerable<MultiNavLink> comps)
    {
        components.AddRange(comps);
    }

    public bool ToggleComponents()
    {
        enabled = !enabled;
        
        components.ForEach(c => c.SetEnabled(enabled));
        
        return enabled;
    }
}