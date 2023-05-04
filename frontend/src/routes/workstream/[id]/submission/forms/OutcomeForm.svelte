<script lang="ts">
	import { FormRow, TextArea } from "$lib/FormComponents";
	import type { Submission } from "$lib/Interfaces";
	import AutosaveIndicator from "../AutosaveIndicator.svelte";
    export let autosave: () => void; 
    export let submission: Submission;
</script>

<div class="text-sm bg-sky-100 p-3 rounded mb-5">
    <p>The last phase was to identify the problem (Where we are today). </p>
    <p>This next phase is about establishing our desired outcomes (where we need to be)</p>
    <p>It important during this step that we focus on the material outcomes at a hight level rather than the actual implementation steps (How we get there)</p>
    <p>It is important that we are all on the page for each step so that we can work towards a cogent/consistent goal.</p>
</div>

<FormRow>
    <h4>1. Provide a brief, high-level vision of the outcomes we want to achieve. </h4>
    <p class="text-xs">e.g: “Housing to be affordable and accessible to all Australians”</p>
    <p class="text-xs">*Note: Implementation details, such as 'implement a land tax,' will be considered in Step 3.</p>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_vision}></TextArea>
    <AutosaveIndicator></AutosaveIndicator>
</FormRow>

<FormRow>
    <h4>2: Expand on the high-level vision by listing specific outcomes we want to achieve.</h4>
    <p class="text-xs">e.g. “No Australian has housing costs that are greater than 30% of their income ”</p>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_specifics}></TextArea>
    <AutosaveIndicator></AutosaveIndicator>
</FormRow>

<FormRow>
    <h4>3: What material/concrete changes are required to achieve these outcomes?</h4>
    <p class="text-xs">e.g. “Increase the supply of homes by 10m </p>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_changes}></TextArea>
    <AutosaveIndicator></AutosaveIndicator>
</FormRow>

<FormRow>
    <h4>4: What are the possible negative tensions/impacts to be aware of when striving for this outcome?</h4>
    <p class="text-xs">e.g. “Loss of green space”</p>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_impacts}></TextArea>
    <AutosaveIndicator></AutosaveIndicator>
</FormRow>

<FormRow>
    <h4>5. What metrics should be used to evaluate these positive and negative changes?</h4>
    <p class="text-xs">e.g. “Number of Australians suffering from housing stress”</p>
    <p class="text-xs">e.g. ‘Percentage of housing located on suitable land”</p>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_metrics}></TextArea>
    <AutosaveIndicator></AutosaveIndicator>
</FormRow>

<FormRow>
    <h4>6: Which stakeholders need to be considered as we try to achieve these outcomes?</h4>
    <p class="text-xs">e.g.: renters, construction companies, natural ecology</p>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_stakeholders}></TextArea>
    <AutosaveIndicator></AutosaveIndicator>
</FormRow>