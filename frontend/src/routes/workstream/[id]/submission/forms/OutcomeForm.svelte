<script lang="ts">
	import { FormRow, TextArea } from "$lib/FormComponents";
	import type { Submission } from "$lib/Interfaces";
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
    <small>e.g: “Housing to be affordable and accessible to all Australians”</small>
    <small>*Note: Implementation details, such as 'implement a land tax,' will be considered in Step 3.</small>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_vision}></TextArea>
</FormRow>

<FormRow>
    <h4>2: Expand on the high-level vision by listing specific outcomes we want to achieve.</h4>
    <small>e.g. “No Australian has housing costs that are greater than 30% of their income ”</small>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_specifics}></TextArea>
</FormRow>

<FormRow>
    <h4>3: What material/concrete changes are required to achieve these outcomes?</h4>
    <small>e.g. “Increase the supply of homes by 10m </small>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_changes}></TextArea>
</FormRow>

<FormRow>
    <h4>4: What are the possible negative tensions/impacts to be aware of when striving for this outcome?</h4>
    <small>e.g. “Loss of green space”</small>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_impacts}></TextArea>
</FormRow>

<FormRow>
    <h4>5. What metrics should be used to evaluate these positive and negative changes?</h4>
    <small>e.g. “Number of Australians suffering from housing stress”</small>
    <small>e.g. ‘Percentage of housing located on suitable land”</small>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_metrics}></TextArea>
</FormRow>

<FormRow>
    <h4>6: Which stakeholders need to be considered as we try to achieve these outcomes?</h4>
    <small>e.g.: renters, construction companies, natural ecology</small>
    <TextArea rows={3} onChange={autosave} bind:value={submission.outcome_stakeholders}></TextArea>
</FormRow>